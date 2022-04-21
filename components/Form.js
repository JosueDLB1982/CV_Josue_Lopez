import styles from "../styles/Form.module.css"
import { Container, TextField, Grid, Typography, Box, Button } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      issues: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Debe Ingresar su Nombre")
        .min(3, "El nombre ingresado es muy corto.")
        .max(10, "El nombre ingresado es muy largo."),

      lastName: Yup.string()
        .required("Debe Ingresar su Apellido")
        .min(3, "El Apellido ingresado es muy corto.")
        .max(10, "El Apellido ingresado es muy largo."),

      email: Yup.string()
        .required("Por favor introduzca su email para poder contactarlo")
        .email("por favor introduzca un email con un formato válido"),

      issues: Yup.string()
        .required("Por favor llene este campo")
        .min(10, "El asunto ingresado es muy corto.")
        .max(30, "El asunto ingresado es muy largo."),

      message: Yup.string()
        .required(
          "Por favor llene este campo con una explicación detallada de lo que desea"
        )
        .min(10, "El mensaje ingresado es muy corto.")
        .max(150, "El mensaje ingresado es muy largo."),
    }),
    
    onSubmit: (values, helpers) => {
      console.log(values);
      helpers.resetForm();
    }
  })

  return (
    <Box className={styles.form}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Box>
            <Typography variant="h4" className={styles.tittle}>
              CONTACTO
            </Typography>
          </Box>
          <Container>
            <Grid item>
              <Grid item className={styles.name}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                    error={Boolean(
                      formik.touched.firstName && formik.errors.firstName
                    )}
                    fullWidth
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    label="Nombre"
                    margin="normal"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                    error={Boolean(
                      formik.touched.lastName && formik.errors.lastName
                    )}
                    fullWidth
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    label="Apellido"
                    margin="normal"
                    name="lastName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.lastName}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  error={Boolean(formik.touched.issues && formik.errors.issues)}
                  fullWidth
                  helperText={formik.touched.issues && formik.errors.issues}
                  label="Asunto"
                  margin="normal"
                  name="issues"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.issues}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  error={Boolean(
                    formik.touched.message && formik.errors.message
                  )}
                  fullWidth
                  multiline
                  rows={5}
                  helperText={formik.touched.message && formik.errors.message}
                  label="Mensaje"
                  margin="normal"
                  name="message"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.message}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Box className={styles.center}>
          <Button
            className={styles.button}
            type="submit"
            variant="outlined"
            color="inherit"
          >
            Enviar
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default Form
