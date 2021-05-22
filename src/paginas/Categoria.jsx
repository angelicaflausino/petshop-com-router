import React, { useEffect, useState } from 'react';
import { useParams, Route, useRouteMatch, Switch } from 'react-router';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';
import { busca } from '../api/api';
import { Link } from 'react-router-dom';
import '../assets/css/blog.css';
import SubCategoria from './SubCategorias';

const Categoria = () => {
    const { id } = useParams();
    const { url, path } = useRouteMatch();
    const [subcategorias, setSubCategorias] = useState([]);

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias);
        })
    }, [id])

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <ListaCategorias />

            <ul className="lista-categorias container flex">
                {subcategorias.map((subcategoria) => (
                    <Link to={`${url}/${subcategoria}`}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                            {subcategoria}
                        </li>
                    </Link>
                ))}
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>
        </>
    )
}

export default Categoria;