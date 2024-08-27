import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'


const SortCars = ({ setCars, cars, setFetchToggler }) => {

    const [selectedSortOption, setSelectedSortOption] = useState({ id: 0, name: 'Sort Cars' });

    const options = [
        { id: 1, name: 'Sort by Price: Low to High' },
        { id: 2, name: 'Sort by Price: High to Low' },
        { id: 3, name: 'Sort by Mileage: High to Low' },
        { id: 4, name: 'Sort by Seating Capacity: Low to High' },
    ]

    const handleOptionClick = (optionID) => {
        // toggling a fetch of all cars
        // setFetchToggler(prev => !prev)
        console.log("Option Clicked = ", optionID);
        let sortedCars = [...cars];
        switch (optionID) {
            case 1:
                sortedCars.sort((a, b) => (a.hourlyRate - b.hourlyRate))
                break;

            case 2:
                sortedCars.sort((a, b) => (b.hourlyRate - a.hourlyRate))
                break;

            case 3:
                sortedCars.sort((a, b) => (Number(b.mileage.split(" ")[0]) - Number(a.mileage.split(" ")[0])))
                break;
            case 4:
                sortedCars.sort((a, b) => (a.seatingCapacity - b.seatingCapacity))
                break;
        }

        setCars(sortedCars)
        console.log("SORTED CARS = ", sortedCars);


    }

    return (
        <Listbox value={selectedSortOption} onChange={setSelectedSortOption}>
            <ListboxButton className='bg-blue-500 text-white font-light p-2 rounded-md w-1/6 h-fit' >{selectedSortOption.name}</ListboxButton>
            <ListboxOptions anchor="bottom">
                {options.map((option) => (
                    <ListboxOption onClick={() => handleOptionClick(option.id)} key={option.id} value={option} className="bg-white focus:bg-blue-200 p-2 hover:cursor-pointer hover:bg-red-200">
                        {option.name}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    )
}

export default SortCars
