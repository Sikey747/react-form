import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import s from './Accordion.modules.scss';

function AccordionMY({title, children,id}) {
    const [expanded, setExpanded] = useState();

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
<>
      <Accordion className={s.MuiAccordion-root} expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}>
        <AccordionSummary aria-controls={`panel${id}-content`} id={`panel${id}`}
          expandIcon={<ArrowDownwardIcon />}
        >
         {title}
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AccordionMY