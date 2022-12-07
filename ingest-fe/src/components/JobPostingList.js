import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkClick from "../assets/icon/LinkClick"
import "../assets/style/jobpostinglist.css"

const JobPostingList = ({ skill, location }) => {
    const [posts, setPosts] = useState([]);
    const [paginations, setPaginations] = useState([]);
    const [crtPage, setCrtPage] = useState(0);

    const searchSemiPosting = (page) => {
        axios.post(`/jobinfo/searchposting?page=${page}`, {
            "searchTpye": "",
            "location": location,
            "skill": skill
        }).then((res) => {
            console.log(res.data);
            setPosts(res.data.postings);
            setPaginations(res.data.barNumbers);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        searchSemiPosting();
    }, [skill])


    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">업무</th>
                        <th scope="col">회사</th>
                        <th scope="col">지역</th>
                        <th scope="col">url</th>
                    </tr>
                </thead>
                <tbody>
                    {posts && posts.map((ele, idx) => {
                        return (
                            <tr kye={idx}>
                                <td>{ele.title}</td>
                                <td>{ele.job}</td>
                                <td>{ele.company}</td>
                                <td>{ele.addressGu}</td>
                                <td><a href={ele.url} target="_blank"><LinkClick /></a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
            <nav aria-label="...">
                <ul class="pagination pagination-sm justify-content-center">
                {paginations && paginations.map((ele, idx) => {
                        return (<li className="page-item" onClick={() => { searchSemiPosting(ele) }}><a className="page-link" >{ele + 1}</a></li>)
                    })}
                </ul>
            </nav>
        </>
    )
}

export default JobPostingList