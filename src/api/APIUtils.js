import { Component } from 'react'
import axios from 'axios'

const apiYahooFinance = axios.create({
    baseURL: '',
    headers:{}
})

const apiDadosAbertos = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/',
    headers:{"Content-type": "application/json"}
})

const apiNews = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {"Content-type": "application/json"}
})

const apiNewscatcher = axios.create({
    baseURL:'https://newscatcher.p.rapidapi.com/v1/',
    headers:{
        "Content-type": "application/json",
        'X-RapidAPI-Key': '2c1074a84cmsh440b79e4532d9e1p1bb0cejsn46189e8a2b0b',
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
})

class APIUtils extends Component{
    
    getDeputados(){
        return apiDadosAbertos.get("/deputados");
    }

    getDeputado(id){
        return apiDadosAbertos.get(`/deputado/${id}`);
    }

    getDeputadoDespesas(id){
        return apiDadosAbertos.get(`/deputados/${id}/despesas`);
    }

    getDeputadoDiscursos(id){
        return apiDadosAbertos.get(`/deputados/${id}/discursos`);
    }

    getDeputadoEventos(id){
        return apiDadosAbertos.get(`/deputados/${id}/eventos`);
    }

    // Endpoints from Newsapi
    getNewsEverything(){
        console.log("print: " + process.env.REACT_APP_API_KEY);
        var d = new Date(Date.now() - 3*864e5); // get minus three days
        return apiNews.get('/everything', {
            params: {
                q : "Politica", 
                from: d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),//new Date().toISOString().split('T')[0].toString(),
                language: "pt",
                sortBy: "popularity",
                excludeDomains: "hardware.com.br",
                apiKey: "c6e1b922e2c84b639f080aea2a7afbb7" /*process.env.REACT_APP_API_KEY*/}
            }
        );
    }

    getNewsTopHeadlines(){
        return apiNews.get('/top-headlines',{
            params:{
                country: 'br',
                q: 'Politica',
                apiKey: process.env.REACT_APP_API_KEY
            }
        });
    }

    getNewsFromNewscatcherAPI(){
        return apiNewscatcher.get('/search_free',{
            params:{
                q: 'Governo',
                lang: 'pt',
                sort_by:'date',
                ranked_only: 'True',
                page: '1',
                page_size: '20',
                media: 'True'
            }
        })
    }
}

export default new APIUtils();