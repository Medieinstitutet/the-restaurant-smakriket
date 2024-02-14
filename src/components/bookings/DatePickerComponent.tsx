import { ThemeProvider, createTheme } from '@mui/material';
import { DatePicker  } from '@mui/x-date-pickers/DatePicker';
import moment, { Moment } from 'moment';


interface Props{
  selectedDate:Moment
  setSelectedDate:(selectedDate:Moment) => void
}



const datePickerSlotProps = {

  day: {
  
    sx: {
      '&.MuiPickersDay-root.Mui-selected': {
        backgroundColor: ' #000',
        
      },
      ':not(.Mui-selected)': {
        backgroundColor: '#fff',
        borderColor: ' #000',
        
      },
      '&:hover': {
        backgroundColor: ' #000',
        borderColor: ' #000',
        color: '#fff',
        transition: 'all 0.5s ease',
      },
      '&.Mui-selected': {
        color: '#fff',
        backgroundColor: ' #000',
        borderColor: ' #000',
        '&:hover': {
          color: '#fff',
          backgroundColor: ' #000',
          borderColor: ' #000',
          transition: 'all 0.5s ease',
        },
      },
    },
  },
  



  

 

}; 



const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto",
      fontSize: 16,
    },
  },

  components: {
    
   
    MuiInputLabel: {
      defaultProps: {
        sx: {
         fontSize:'1.2rem',
          fontFamily: "Roboto, 'Courier New', Courier, monospace",
          backgroundColor:'white',
          padding:'0 5px',
        },
      },
      
    },
  },
 
});




export const DatePickerComponent = ({selectedDate, setSelectedDate}:Props) => {
  const handleDateChange = ( value: Moment | null) => {
    if(value)
  setSelectedDate(value);
};






    return (
      <ThemeProvider theme={theme}>
        <DatePicker
        label="Välj en dag"
        openTo="day"
        views={['day']}
        value={selectedDate}
        format="YYYY-MM-DD"
        onChange={handleDateChange}
        minDate={moment(new Date())}
          sx={{
           
          
            width: "270px",
            ".MuiSvgIcon-root":{
              color: "black",
              outlineColor:'transparent',
           
            },

          '& .MuiInputLabel-root': {
            color: 'black',
          
          },
          '& .MuiOutlinedInput-input': {
            color: 'black',
           
           
          },
          '& .MuiOutlinedInput-root': {
            '&:focus  fieldset': {
              borderColor: 'black',
              color: 'black'
              
            },
            '&:hover fieldset': {
              borderColor: 'black',
              color: 'black',
            },
            '&:active fieldset': {
              borderColor: 'black',
              color: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
              color: 'black',
            },
           
          },
        }} 
        slotProps={{
          ...datePickerSlotProps
         
        }}  
        />
      </ThemeProvider>
    );
  };