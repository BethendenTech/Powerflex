import { useDropzone } from 'react-dropzone';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Box, Button, Checkbox, List, ListItem, ListItemText, Typography } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import React, { useState } from 'react';
import { CheckboxContainer, CustomAccordionSummary, CustomExpandIcon, Title, TitleContainer } from './form/style';
import Image from 'next/image';

import ArrowUp from "../public/images/web/arrowlist-down.svg";
import ArrowDown from "../public/images/web/arrowlist-up.svg";

type ComponentProps = {
    name: string;
    label: string;
    accept: Record<string, string[]>; // Correct type for the accept prop
    maxSize: number;
    maxFiles: number;
    setValue: any
};

const FileUploadComponent = (props: ComponentProps) => {
    const { name, label, accept, maxSize, maxFiles, setValue } = props;
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState<string[]>([]);
    const [uploadError, setUploadError] = useState<string[]>([]);

    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const [expanded, setExpanded] = useState(false);

    const handleAccordionToggle = () => {
        setExpanded(!expanded);
    };

    const { acceptedFiles, fileRejections, open, getRootProps, getInputProps } = useDropzone({
        noClick: true,
        noKeyboard: true,
        accept,
        maxSize,
        maxFiles,
    });

    const uploadFile = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upload-file/`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setValue(name, data.file)
                setUploadSuccess((prev) => [...prev, file.name]);
            } else {
                const errorData = await response.json();
                setUploadError((prev) => [...prev, `${file.name}: ${errorData.error || 'Failed to upload'}`]);
            }
        } catch (error) {
            setUploadError((prev) => [...prev, `${file.name}: ${error.message}`]);
        }
    };

    const handleUpload = async () => {
        setUploading(true);
        setUploadSuccess([]);
        setUploadError([]);

        for (const file of acceptedFiles) {
            await uploadFile(file);
        }

        setUploading(false);
    };

    React.useEffect(() => {
        if (acceptedFiles?.length > 0) {
            handleUpload()
        }
    }, [acceptedFiles])

    const files = acceptedFiles.map((file) => (
        <ListItem key={file.path}>
            <ListItemText primary={`${file.path} - ${file.size} bytes`} />
        </ListItem>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <ListItem key={file.path}>
            {file.path} - {file.size} bytes
            <List>
                {errors.map((e) => (
                    <ListItem key={e.code}>
                        <ListItemText primary={e.message} />
                    </ListItem>
                ))}
            </List>
        </ListItem>
    ));

    return (
        <Accordion
            expanded={expanded}
            onChange={handleAccordionToggle}
            sx={{
                "&.MuiAccordion-root": {
                    border: `1px solid #5C69FF`,
                    borderRadius: "12px",
                },
                boxShadow: "none",
            }}
        >
            <CustomAccordionSummary
            // expandIcon={
            //     <CustomExpandIcon>
            //         <ExpandMoreIcon />
            //     </CustomExpandIcon>
            // }
            >
                <Box sx={{ position: "relative", width: "100%" }}>
                    {/* Title */}
                    <TitleContainer>
                        <Title>{label}</Title>
                    </TitleContainer>

                    {/* Checkbox */}
                    <CheckboxContainer>
                        <Checkbox
                            size='large'
                            sx={{
                                "&.MuiCheckbox-root": {
                                    color: "#257FE6",
                                },
                            }}
                            checked={checked}
                            onChange={(e) => {
                                e.stopPropagation();
                                handleCheckboxChange();
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </CheckboxContainer>

                    {/* Custom Expand/Collapse Icon */}
                    <CustomExpandIcon>
                        <Image
                            src={expanded ? ArrowDown : ArrowUp}
                            alt={expanded ? "Collapse" : "Expand"}
                            width={20}
                            height={20}
                        />
                    </CustomExpandIcon>
                </Box>
            </CustomAccordionSummary>
            <AccordionDetails>
                <Box sx={{ borderStyle: 'dashed', borderWidth: 2, borderRadius: '12px' }} textAlign="center" padding={2}>
                    <CloudUploadOutlinedIcon />
                    <Box {...getRootProps({ className: 'dropzone' })} mt={3}>
                        <input {...getInputProps()} />
                        <Typography sx={{
                            fontSize: "13.69px",
                            fontWeight: 700,
                            lineHeight: "16.57px",
                            textAlign: "center",

                        }}>Choose a file or drag & drop it here</Typography>
                        <Typography sx={{
                            fontSize: "11.87px",
                            fontWeight: 500,
                            lineHeight: "16.57px",
                            textAlign: "center",
                            color: "#A9ACB4"
                        }}>Supported formats: JPEG, PNG, PDF, MP4 up to 10MB</Typography>

                        <Box mt={2}>
                            <Button sx={{
                                padding: "6px 20px"
                            }} variant="contained" onClick={() => open()}>
                                Browse File
                            </Button>
                        </Box>
                    </Box>
                    {files.length > 0 && (
                        <Box mt={2}>
                            <Alert severity="success">
                                <List>{files}</List>
                            </Alert>
                        </Box>
                    )}
                    {fileRejectionItems.length > 0 && (
                        <Box mt={2}>
                            <Alert severity="error">
                                <List>{fileRejectionItems}</List>
                            </Alert>
                        </Box>
                    )}


                    {uploadSuccess.length > 0 && (
                        <Box mt={2}>
                            <Alert severity="success">
                                <Typography>Uploaded Successfully:</Typography>
                                <List>
                                    {uploadSuccess.map((file) => (
                                        <ListItem key={file}>
                                            <ListItemText primary={file} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Alert>
                        </Box>
                    )}
                    {uploadError.length > 0 && (
                        <Box mt={2}>
                            <Alert severity="error">
                                <Typography>Upload Errors:</Typography>
                                <List>
                                    {uploadError.map((error, index) => (
                                        <ListItem key={index}>
                                            <ListItemText primary={error} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Alert>
                        </Box>
                    )}
                </Box>
            </AccordionDetails>
        </Accordion >
    );
};

export default FileUploadComponent;
