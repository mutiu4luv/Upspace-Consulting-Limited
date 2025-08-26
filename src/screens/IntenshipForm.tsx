import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
  Divider,
  FormLabel,
  Card,
  CardContent,
} from "@mui/material";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
  residency: string;
  university: string;
  major: string;
  minor: string;
  gpa: string;
  graduationDate: string;
  academicProjects: string;
  workExperience: string;
  skills: string;
  whyIntern: string;
  coreService: string;
  longTermGoal: string;
  values: string;
  resume: File | null;
  transcript: File | null;
  source: string;
  startDate: string;
  endDate: string;
  signature: string;
  signatureDate: string;
};

const InternshipForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    residency: "Yes",
    university: "",
    major: "",
    minor: "",
    gpa: "",
    graduationDate: "",
    academicProjects: "",
    workExperience: "",
    skills: "",
    whyIntern: "",
    coreService: "",
    longTermGoal: "",
    values: "",
    resume: null,
    transcript: null,
    source: "",
    startDate: "",
    endDate: "",
    signature: "",
    signatureDate: "",
  });

  // Handles both TextField + Select
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Application submitted successfully!");
  };

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 5, px: 2 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, background: "#fafafa" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, textAlign: "center", mb: 3, color: "#1976d2" }}
        >
          Internship Application
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", mb: 4, color: "text.secondary" }}
        >
          Upspace Consulting Limited – Strategically positioned for long-term
          growth
        </Typography>

        <Card variant="outlined" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>
                Application for Internship - Upspace Consulting Limited
              </strong>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              As Upspace Consulting Limited enters our foundational year, we are
              seeking passionate, driven individuals to join our team as interns.
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              This application is designed to help us understand not just your
              skills, but your potential to contribute to our mission.
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              By submitting this application, I certify that the information
              provided is true and accurate to the best of my knowledge.
            </Typography>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Personal Information */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Personal Information
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="LinkedIn Profile URL"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="residency-label">
                          Are you a Nigerian resident?
                        </InputLabel>
                        <Select
                          labelId="residency-label"
                          name="residency"
                          value={formData.residency}
                          onChange={handleChange}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Educational Background */}
              <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Educational Background
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="University/College"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Major(s)"
                        name="major"
                        value={formData.major}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Minor(s)"
                        name="minor"
                        value={formData.minor}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Current GPA"
                        name="gpa"
                        value={formData.gpa}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Expected Graduation Date"
                        name="graduationDate"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.graduationDate}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Attachments */}
              <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Attachments
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Button variant="outlined" component="label" fullWidth>
                        Upload Resume (PDF)
                        <input
                          type="file"
                          name="resume"
                          hidden
                          accept=".pdf"
                          onChange={handleFileChange}
                        />
                      </Button>
                      {formData.resume && (
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {formData.resume.name}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="outlined" component="label" fullWidth>
                        Upload Transcript (PDF)
                        <input
                          type="file"
                          name="transcript"
                          hidden
                          accept=".pdf"
                          onChange={handleFileChange}
                        />
                      </Button>
                      {formData.transcript && (
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {formData.transcript.name}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Additional Information
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="How did you hear about this internship?"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="date"
                        label="Preferred Start Date"
                        name="startDate"
                        InputLabelProps={{ shrink: true }}
                        value={formData.startDate}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="date"
                        label="Preferred End Date"
                        name="endDate"
                        InputLabelProps={{ shrink: true }}
                        value={formData.endDate}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Short-Answer Section */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Short-Answer Questions
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormLabel sx={{ fontWeight: 500, mb: 1, display: "block" }}>
                        Why do you want to intern at Upspace Consulting Limited?
                      </FormLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        name="whyIntern"
                        value={formData.whyIntern}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ fontWeight: 500, mb: 1, display: "block" }}>
                        Which core service interests you and why?
                      </FormLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        name="coreService"
                        value={formData.coreService}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ fontWeight: 500, mb: 1, display: "block" }}>
                        Describe a time you helped a team achieve a long-term goal.
                      </FormLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        name="longTermGoal"
                        value={formData.longTermGoal}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ fontWeight: 500, mb: 1, display: "block" }}>
                        Choose UPSPACE values you demonstrated and describe.
                      </FormLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        name="values"
                        value={formData.values}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Signature Section */}
            <Grid item xs={12}>
              <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Certification
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    By submitting this application, I certify that the information provided is true and accurate to the best of my knowledge. I understand that any misrepresentation may lead to the cancellation of my application or internship offer.
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Signature"
                        name="signature"
                        value={formData.signature}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type="date"
                        label="Date"
                        name="signatureDate"
                        InputLabelProps={{ shrink: true }}
                        value={formData.signatureDate}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ py: 1.5, fontWeight: 600, borderRadius: 2, mt: 2 }}
              >
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default InternshipForm;
