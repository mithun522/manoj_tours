import { Scheduler } from '@aldabil/react-scheduler';
import React, { useState } from 'react';
import filterIcon from '../../assets/filter-icon.svg';
import Layout from '../Layout/Layout';
import CustomDropdown from '../shared/CustomDropdown';

const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState('Filter By');
    const options = ['From Date', 'To Date'];

    // Define event colors
    const eventColors = {
        upcoming: '#4CAF50', // Green
        expired: '#FF5722',   // Red
        current: '#2196F3',   // Blue
    };

    // Function to determine the color of the circle based on date
    const getCircleColor = (date) => {
        const currentDate = new Date();
        if (date < currentDate) {
            return eventColors.expired;
        } else if (date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
            return eventColors.current;
        } else {
            return eventColors.upcoming;
        }
    };


    return (
        <Layout>
            <div className='p-4'>
                <div className='flex mb-8 justify-between'>
                    <h1 className='text-2xl font-bold'>Calendar</h1>
                    <CustomDropdown options={options} selectedOption={selectedOption} onSelect={setSelectedOption} icon={filterIcon} />
                </div>
                <div className='overflow-hidden'>
                    <Scheduler
                        view="month"
                        // selectedDate={selectedDate}
                        height={400}
                        onSelectedDateChange={(date) => setSelectedDate(date)}
                        events={[
                            {
                                event_id: 5,
                                title: "Event 6",
                                start: new Date("2024/05/27 09:30"),
                                color: getCircleColor(new Date("2024/05/02"))
                            },
                            {
                                event_id: 1,
                                title: "Event 1",
                                start: new Date("2024/05/02"),
                                end: new Date("2024/05/02"),
                                color: getCircleColor(new Date("2024/05/02"))
                            },
                            {
                                event_id: 2,
                                title: "Event 2",
                                start: new Date("2024/05/04 10:00"),
                                color: getCircleColor(new Date("2024/05/04"))
                            },
                        ]}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Calender;
