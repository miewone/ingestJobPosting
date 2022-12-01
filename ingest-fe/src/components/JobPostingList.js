import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkClick from "../assets/icon/LinkClick"
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
                                <td>{ele.location.split("구")[0].split(" ").slice(-1)[0]+"구"}</td>
                                <td><a href={ele.url} target="_blank"><LinkClick/></a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    {paginations && paginations.map((ele,idx) => {
                        return (<li className="page-item" onClick={() => {searchSemiPosting(ele)}}><a className="page-link" href="#" >{ele+1}</a></li>)
                    })}
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </>
    )
}

export default JobPostingList