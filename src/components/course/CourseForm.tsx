import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { ICourse } from "../../types/course.types";
import { courseService } from "../../services/course.service";

interface CourseFormProps {
  //   onSubmit: (course: Course) => void;
}

export const CourseForm: React.FC<CourseFormProps> = () => {
  const [course, setCourse] = useState<ICourse>({
    title: "",
    description: "",
    price: 0,
    discountedPrice: 0,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handleNumberChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCourse({ ...course, [event.target.name]: +event.target.value });
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Course => ", course);
    courseService.createCourse(course);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Course Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Course Title"
            name="title"
            value={course.title}
            onChange={handleChange}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Instructor Name"
            name="instructor"
            value={course.instructor}
            onChange={handleChange}
          />
        </Grid> */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={course.description || ""} // Handle optional field
            onChange={handleChange}
            multiline
            rows={4}
          />
        </Grid>
        {/* <Grid item xs={6}>
          <TextField
            fullWidth
            label="Image URL"
            name="imageUrl"
            value={course.imageName || ""} // Handle optional field
            onChange={handleChange}
          />
        </Grid> */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={course.price || +""} // Handle optional field
            onChange={handleNumberChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Discounted Price"
            name="discountedPrice"
            value={course.discountedPrice || ""} // Handle optional field
            onChange={handleNumberChange}
          />
        </Grid>
        {/* <Grid item xs={6}>
          <TextField
            fullWidth
            label="Rating"
            name="rating"
            value={course.rating || ""} // Handle optional field
            onChange={handleNumberChange} 
          />
        </Grid> */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create Course
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
