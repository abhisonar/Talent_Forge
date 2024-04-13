/* eslint-disable react/prop-types */
import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@shadcnui/lib/utils';
import { Button } from '@shadcnui/components/ui/button';
import { Calendar } from '@shadcnui/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@shadcnui/components/ui/popover';
import UiButton from '@libs/design-system/ui-button/ui-button.component';

const UiInputDate = ({ setInputDate, selectedDate, label }) => {
  const [date, setDate] = React.useState();

  const handleDateSelection = (date) => {
    setInputDate(date);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !selectedDate && 'text-muted-foreground'
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? (
            format(selectedDate, 'dd-MM-yyyy')
          ) : (
            <span>{label || 'Pick a date'} </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelection}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default UiInputDate;
