import Navbar from "../components/Navbar";
import ReactLogo from "../assets/react.png"
import HugginFaceLogo from '../assets/hugginface.png'
import LLamaLogo from '../assets/llama_logo.png'
import NodeJsLogo from '../assets/nodejs.jpeg'
import OllamaLogo from '../assets/ollama.png'
import PythonLogo from '../assets/python.jpeg'
import Footer from "../components/Footer";
import KaggleLogo from '../assets/kaggle_logo.jpeg'
import NCDLogo from '../assets/ncd_logo.jpeg'

export default function Development({pageName}) {
    return (
        <>
            <div className="page">
                <Navbar pageName={pageName}/>
                <div className="page-wrapper">
                    <div className="page-header d-print-none">
                        <div className="container-xl">
                            <div className="page-title">
                                Development
                            </div>
                        </div>
                    </div>
                    <div className="page-body">
                        <div className="container-xl">
                            <div className="row row-cards">
                                <div className="col-md-3 col-xs-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={ReactLogo} alt="" className="w-100" />
                                        </div>
                                        <div className="card-footer">
                                            <h3 className="mb-0">Front End</h3>
                                            <h5>React JS</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={NodeJsLogo} alt="" className="w-100" />
                                        </div>
                                        <div className="card-footer">
                                            <h3 className="mb-0">Back End</h3>
                                            <h5>Node JS</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={PythonLogo} alt="" className="w-100" />
                                        </div>
                                        <div className="card-footer">
                                            <h3 className="mb-0">Language Used for training</h3>
                                            <h5>Python</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={HugginFaceLogo} alt="" className="w-100" />
                                        </div>
                                        <div className="card-footer">
                                            <h3 className="mb-0">Source of the Model Used</h3>
                                            <h5>Hugginface</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-12">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <img src={OllamaLogo} alt="" className="w-100" />
                                        </div>
                                        <div className="card-footer">
                                            <h3 className="mb-0">Server used to Host Local Model</h3>
                                            <h5>Ollama</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-12">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <img src={LLamaLogo} alt="" className="w-100" />
                                        </div>
                                        <div className="card-footer">
                                            <h3 className="mb-0">Type of LLM from HuggingF.</h3>
                                            <h5>
                                                m42-health_-_Llama3-Med42-8B-gguf
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-12">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <img src={NCDLogo} alt="" className="w-100" />
                                        </div>
                                        <div className="card-footer">
                                            <h3 className="mb-0">Dataset Source</h3>
                                            <h5>
                                                NCD Risk Factor Collaboration
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-12">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <img src={KaggleLogo} alt="" className="w-100" />
                                        </div>
                                        <div className="card-footer">
                                            <h3 className="mb-0">Dataset Source</h3>
                                            <h5>
                                                Kaggle
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-header d-print-none">
                        <div className="container-xl">
                            <div className="page-title">
                                Description
                            </div>
                        </div>
                    </div>
                    <div className="page-body">
                        <div className="container-xl">
                            <div className="rows row-cards">
                                <div className="col">
                                    <div className="card px-5">
                                        <div className="card-body">
                                            <p className="lh-lg">
                                                The solution was developed using a Node JS backend and a React JS front end.
                                                A pre-trained health model was exported from the Hugginface platform.
                                                This model was further trained using datasets from NCD Risk Factor Collaboration,
                                                Kaggle and Mendeley Data. The datasets included a prediction tool that predicts
                                                hypertension based on factors such as age and bmi. Other datasets were used to
                                                train the model on how much specific factors may affect hypertension such as smoking,
                                                pregnancy etc. Training was done using Python. The model that was used was a trained
                                                version of llama3. Ollama was used for the further training of the model as well as
                                                communicating with the backend to provide answers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}