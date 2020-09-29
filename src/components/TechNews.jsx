import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchTech } from "../redux/actions/fetch_tech";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { format } from 'date-fns';
import Fade from 'react-reveal/Fade';
import './TechNews.css'


const Tech = () => {

    //----- redux and dispatch the action
    const techSelector = useSelector((state) => state.FetchTech);
    const dispatch = useDispatch();
    const getTechNews = () => dispatch(fetchTech());


    useEffect(() => {
        getTechNews();
    }, [])

    return (

        <Grid
            container
            alignItems="center"
            justify="center"
        >
            <Grid item xs={8}>
                <Card className='news'>
                    {techSelector.techNews.map(x => {
                        return (
                            <Fade >
                                <Card className='news__card' key={x.title} >
                                    <CardActionArea>
                                        <CardMedia
                                            className='news__media'
                                            image={x.urlToImage}

                                        />
                                        <CardContent>
                                            <div className="news__date">
                                                <span> {format(new Date(x.publishedAt), 'dd.MM.yyyy')} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3zm0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18zm0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z" fill="#a6a6a4" /></svg> {x.author} </span>

                                            </div>
                                            <a href={x.url} target='_blank' without rel="noopener noreferrer" className='news__title'>
                                                {x.title}
                                            </a>
                                            <p className='news__description'  >
                                                {x.description}
                                            </p>
                                            <a className='news__read' target='_blank' without rel="noopener noreferrer" href={x.url}>Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" /></svg></a>

                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Fade>
                        )

                    })}
                </Card>


            </Grid>
        </Grid>

    )
}

export default Tech;
