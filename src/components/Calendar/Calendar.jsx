import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { Scheduler } from '@aldabil/react-scheduler';
import CustomDropdown from '../shared/CustomDropdown';
import filterIcon from '../../assets/filter-icon.svg';

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

    // Generate events with dynamic colors
    const generateEvents = () => {
        return [
            {
                event_id: 5,
                title: "Event 6",
                start: new Date("2024/05/27 09:30"),
                color: getCircleColor(new Date("2024/05/02"))
            },
            {
                event_id: 1,
                title: "Event 1",
                start: new Date("2024/05/02 09:30"),
                end: new Date("2024/05/02 10:30"),
                color: getCircleColor(new Date("2024/05/02"))
            },
            {
                event_id: 2,
                title: "Event 2",
                start: new Date("2024/05/04 10:00"),
                end: new Date("2024/05/04 11:00"),
                color: getCircleColor(new Date("2024/05/04"))
            },
        ];
    };

    return (
        <>
            <Layout>
                <div className='flex p-5 mb-8 justify-between' >
                    <h1 className='text-2xl font-bold' >Calender</h1>
                    <CustomDropdown options={options} selectedOption={selectedOption} onSelect={setSelectedOption} icon={filterIcon} />
                </div>
                <Scheduler
                    view="month"
                    // selectedDate={selectedDate}
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
            </Layout>
        </>
    );
};

export default Calender;
