import React, { useEffect, useState } from "react";
import Dropdown from "../../components/DropDown";
import PageTitle from "../../components/PageTitle";
import "../../styles/ContextualMusic.css";
import { contextualApi } from "../../API/Rule_Contex";

function ContextualMusic(props) {
    const [activities, setActivities] = useState([]);
    const [moods, setMoods] = useState([]);
    const [weather, setWeather] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [selectedMood, setSelectedMood] = useState(null);
    const [selectedWeather, setSelectedWeather] = useState(null);

    const [contextualOption, setContextualOption] = useState({
        activities: [],
        moods: [],
        weather: [],
        genres: [],
    });

    useEffect(() => {
        const getContextual = async () => {
            try {
                const response = await contextualApi();
                setContextualOption(response);
                setActivities(response.activities);
                setMoods(response.moods);
                setWeather(response.weather);
            } catch (error) {
                console.log(error);
            }
        };
        getContextual();
    }, []);

    const handleActivitySelect = (selectedOption) => {
        setSelectedActivity(selectedOption);
    };

    const handleMoodSelect = (selectedOption) => {
        setSelectedMood(selectedOption);
    };

    const handleWeatherSelect = (selectedOption) => {
        setSelectedWeather(selectedOption);
    };

    return (
        <div className="contex-container gradient-top">
            <PageTitle title="Música Contextual" />
            <div className="dropdown-container">
                <div>
                    {activities.length > 0 && (
                        <Dropdown
                            dropname="Actividades"
                            options={activities}
                            onSelect={handleActivitySelect}
                            selector="activity"
                            selectedOption={selectedActivity}
                        />
                    )}
                </div>
                <div>
                    {moods.length > 0 && (
                        <Dropdown
                            dropname="Estado de ánimo"
                            options={moods}
                            onSelect={handleMoodSelect}
                            selector="mood"
                            selectedOption={selectedMood}
                        />
                    )}
                </div>
                <div>
                    {weather.length > 0 && (
                        <Dropdown
                            dropname="Clima"
                            options={weather}
                            onSelect={handleWeatherSelect}
                            selector="weather"
                            selectedOption={selectedWeather}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContextualMusic;
