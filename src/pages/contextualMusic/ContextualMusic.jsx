import React, { useEffect, useState } from "react";
import Dropdown from "../../components/DropDown";
import PageTitle from "../../components/PageTitle";
import "../../styles/ContextualMusic.css";
import { contextualApi } from "../../API/Rule_Contex";
import ButtonFilter from "../../components/ButtonFilter";
import ButtonFilterTwo from "../../components/ButtonFilterTwo";
import OrangeButton from "../../components/OrangeButton";

function ContextualMusic(props) {
    const [activities, setActivities] = useState([]);
    const [moods, setMoods] = useState([]);
    const [weather, setWeather] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [selectedMood, setSelectedMood] = useState(null);
    const [selectedWeather, setSelectedWeather] = useState(null);
    const [selectedGenres, setSelectedGenres] = useState([])
    const capitalCase = (str) => {
        if (str) {
            const wordArr = str.split(" ");
            const capitalyzedArr = wordArr.map((n) => {
                return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
            });
            return capitalyzedArr.join(" ");
        }
    };
    const generatePlaylist = () => {
        const arr = document.querySelectorAll(".footer-button-container input:checked")
        console.log(arr)
    }

    const refreshChecked = () => {
        const arr = document.querySelectorAll(".footer-button-container input:checked")
        const genreList = [...arr].map((n) => {
            return n.value
        })
        setSelectedGenres(genreList)
    }

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
                <div className="text-in-context">
                    <p>
                        ¿Cuál es la ocasión?
                    </p>
                </div>
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
                <div className="text-in-context">
                    <p>
                        ¿Cómo te sientes?
                    </p>
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
                <div className="text-in-context">
                    <p>
                        ¿Cómo está el clima?
                    </p>
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
                <div className="text-in-context">
                    <p>Selecciona hasta 3 géneros:</p>
                </div>
                <div className="footer-button-container">
                    {contextualOption.genres.map((n) => { return <ButtonFilterTwo onFkChange={refreshChecked} txt={capitalCase(n.genre_name)} /> })}
                </div>
                <div className="size-general">
                    <OrangeButton txt="Crear Playlist" />
                </div>
            </div>
        </div>
    );
}

export default ContextualMusic;
