import React, { useEffect, useState } from "react";
import Dropdown from "../../components/DropDown";
import PageTitle from "../../components/PageTitle";
import "../../styles/ContextualMusic.css";
import { createContextualPlaylistApi, contextualApi } from "../../API/Rule_Contex";
import ButtonFilter from "../../components/ButtonFilter";
import ButtonFilterTwo from "../../components/ButtonFilterTwo";
import OrangeButton from "../../components/OrangeButton";

function ContextualMusic(props) {
    const [contextualOption, setContextualOption] = useState({
        activities: [],
        moods: [],
        weather: [],
        genres: [],
    });
    const [selectOptions, setSelectOptions] = useState([
        { name: "activity", value: "" },
        { name: "mood", value: "" },
        { name: "weather", value: "" }
    ]);
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

  const makePlaylist = async ()=>{
      try{
        const response = await createContextualPlaylistApi({
            activity:selectOptions.activity,
            mood:selectOptions.mood,
            weather:selectOptions.weather,
            genre:selectedGenres
      })
        console.log(response);
    }
    catch(err){
      console.log(err);
    }

    const generatePlaylist = () => {
        makePlaylist({ activity: selectOptions.activity });
    }

    const refreshChecked = () => {
        const arr = document.querySelectorAll(".footer-button-container input:checked")
        const genreList = [...arr].map((n) => {
            return n.value
        })
        setSelectedGenres(genreList);
        console.log(genreList);
    }


    useEffect(() => {
        const getContextual = async () => {
            try {
                const response = await contextualApi();
                setContextualOption(response);
            } catch (error) {
                console.log(error);
            }
        };
        getContextual();
    }, []);

    const handleUpdateSelect = () => {
        const getSelects = document.querySelectorAll("select");
        const selectList = {};
        for (let i = 0; i < getSelects.length; i++) {
            selectList[getSelects[i].name] = getSelects[i].value;
        }
        setSelectOptions(selectList);
        console.table(selectList);
    }

    return (
        <div className="contex-container gradient-top">
            <PageTitle goTo="/home" title="Música Contextual" />
            <div className="dropdown-container">
                <div className="text-in-context ani-right-enter">
                    <p>
                        ¿Cuál es la ocasión?
                    </p>
                </div>
                <div className="ani-right-enter">
                    {contextualOption.activities.length > 0 && (
                        <Dropdown
                            dropname="Actividades"
                            options={contextualOption.activities}
                            onSelect={handleUpdateSelect}
                            selector="activity"
                        />
                    )}
                </div>
                <div className="text-in-context ani-left-enter">
                    <p>
                        ¿Cómo te sientes?
                    </p>
                </div>
                <div className="ani-left-enter">
                    {contextualOption.moods.length > 0 && (
                        <Dropdown
                            dropname="Estado de ánimo"
                            options={contextualOption.moods}
                            onSelect={handleUpdateSelect}
                            selector="mood"
                        />
                    )}
                </div>
                <div className="text-in-context ani-right-enter">
                    <p>
                        ¿Cómo está el clima?
                    </p>
                </div>
                <div className="ani-right-enter">
                    {contextualOption.weather.length > 0 && (
                        <Dropdown
                            dropname="Clima"
                            options={contextualOption.weather}
                            onSelect={handleUpdateSelect}
                            selector="weather"
                        />
                    )}
                </div>
                <div className="text-in-context ani-left-enter">
                    <p>Selecciona hasta 3 géneros:</p>
                </div>
                <div className="footer-button-container ani-left-enter">
                    {contextualOption.genres.map((n) => { return <ButtonFilterTwo changeFunc={refreshChecked} filterId={n.genre_id} txt={capitalCase(n.genre_name)} /> })}
                </div>
                <div className="size-general ani-right-enter">

                    <OrangeButton isdisabled={(selectedGenres.length > 3 || !(selectOptions.mood != "" || selectOptions.activity != "" || selectOptions.weather != "" || selectedGenres.length > 0))} txt="Crear Playlist" postLogin={generatePlaylist} />
                </div>
            </div>
        </div>
    );
}
// genrelength>0 || select.mood || selec
export default ContextualMusic;
