import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Footer from '../components/Footer';

function Chat({pageName}) {
    const [question, setQuestion] = useState("");
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setAnswer] = useState("");
    const [newQA, setNewQA] = useState([
        { question: "", answer: "" },
    ]);

    const handleClick = () => {
        if (newQA[0].question == "") {
            setNewQA([{ question: question, answer: "" }]);
        } else {
            setNewQA([...newQA, { question: question, answer: "" }]);
        }
        axios.post("http://localhost:3000/test", { prompt: question })
            .then((res) => {
                var updatedItems = [...newQA];
                updatedItems[(updatedItems.length - 1)].question = question;
                updatedItems[(updatedItems.length - 1)].answer = res.data.message;
                setNewQA(updatedItems);
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className="page" style={{ width: "100%" }}>
            <Navbar pageName={pageName}/>
            <div className="page-wrapper">
                <div className="page-header d-print-none">
                    <div className="container-xl">
                        <div className="page-title">
                            Chat
                        </div>
                    </div>
                </div>
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="card m-0 p-0">
                                <div className="card-body scrollable" style={{ height: "50vh" }}>
                                    <div className="chat">
                                        <div className="chat-bubbles">
                                            <div className="chat-item">
                                                <div className="row align-items-end">
                                                    <div className="col-auto"><span className="avatar">H+</span>
                                                    </div>
                                                    <div className="col col-lg-6">
                                                        <div className="chat-bubble">
                                                            <div className="chat-bubble-title">
                                                                <div className="row">
                                                                    <div className="col chat-bubble-author">Hyper Plus</div>
                                                                    {/* <div className="col-auto chat-bubble-date">09:34</div> */}
                                                                </div>
                                                            </div>
                                                            <div className="chat-bubble-body">
                                                                <p>Good day, How can I be of assistance?</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {newQA[0].question != "" && newQA.map((qa, index) => (
                                                <div key={index}>
                                                    <div className="chat-item mb-3">
                                                        <div className="row align-items-end justify-content-end">
                                                            <div className="col col-lg-6">
                                                                <div className="chat-bubble chat-bubble-me">
                                                                    <div className="chat-bubble-title">
                                                                        <div className="row">
                                                                            <div className="col chat-bubble-author">User</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="chat-bubble-body">
                                                                        <p>
                                                                            {qa.question}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto"><span className="avatar">User</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="chat-item mb-3">
                                                        <div className="row align-items-end">
                                                            <div className="col-auto"><span className="avatar">H+</span>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div className="chat-bubble">
                                                                    <div className="chat-bubble-body">
                                                                        <p className="text-secondary text-italic">Thinking...<span className="animated-dots"></span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {qa.answer != "" ? (
                                                        <div className="chat-item mb-3">
                                                            <div className="row align-items-end">
                                                                <div className="col-auto"><span className="avatar">H+</span>
                                                                </div>
                                                                <div className="col col-lg-6">
                                                                    <div className="chat-bubble">
                                                                        <div className="chat-bubble-title">
                                                                            <div className="row">
                                                                                <div className="col chat-bubble-author">Hyper Plus</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="chat-bubble-body">
                                                                            <div>{qa.answer.split("\n").map((line, index) => (
                                                                                <p key={index}>{line}</p>
                                                                            ))}</div>
                                                                            {/* {qa.answer} */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : ""}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-11">
                                            <input type="text" className="form-control" autoComplete="off" placeholder="Type message" value={question} onChange={(e) => { setQuestion(e.target.value) }} />
                                        </div>
                                        <div className="col-md-1">
                                            <button className="btn btn-primary w-100" onClick={handleClick}>
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                    <div className="input-group input-group-flat">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Chat
