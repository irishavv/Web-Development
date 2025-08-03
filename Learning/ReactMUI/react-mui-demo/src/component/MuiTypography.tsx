import { Typography } from '@mui/material';
import React from 'react';

export const MuiTypography =() => {
    return(
        <div>
            <Typography variant='h1'>H1 heading</Typography>
            <Typography variant='h2'>H2 heading</Typography>
            <Typography variant='h3'>H3 heading</Typography>
            <Typography variant='h4' component='h1' gutterBottom>H4 heading</Typography>
            <Typography variant='h5'>H5 heading</Typography>
            <Typography variant='h6'>H6 heading</Typography>


            <Typography variant='subtitle1'>Sub Title 1</Typography>
            <Typography variant='subtitle2'>Sub TItle 2</Typography>



            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptatum voluptatem ad ducimus ullam voluptatibus. Rerum repellendus veritatis quos provident a laborum optio nihil libero corrupti aperiam, consequuntur voluptate harum?</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ratione beatae nostrum, ut delectus quibusdam harum, eligendi ipsa voluptate autem consectetur non pariatur sed. Suscipit explicabo libero reiciendis nesciunt ullam!</Typography>
        </div>
    )
}