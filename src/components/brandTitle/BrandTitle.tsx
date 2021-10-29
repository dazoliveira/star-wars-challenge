import { Grid, Typography } from "@material-ui/core";

type BrandTitleProps = {
    welcomeText: string
    subTitle: string
    brandName: string
}

export default function BrandTitle({ welcomeText, subTitle, brandName }: BrandTitleProps) {

    return (    
        <Grid 
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant='h2' color='primary' align='center' gutterBottom>
              {welcomeText} <Typography variant='h1' component='span'>{brandName}</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color='primary' variant='subtitle2' align='center'>
                {subTitle}
            </Typography>
          </Grid>

        </Grid>
    )
}