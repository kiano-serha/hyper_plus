import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Index({pageName}) {
    return (
        <>
            <div className="page">
                <Navbar pageName={pageName}/>
                <div className="page-wrapper">
                    <div className="page-header d-print-none">
                        <div className="container-xl">
                            <div className="page-title">
                                Hypertension
                            </div>
                        </div>
                    </div>
                    <div className="page-body">
                        <div className="container-xl">
                            <div className="rows row-cards">
                                <div className="col-md-12 mb-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="mb-0 mt-0">Definition</h3>
                                        </div>
                                        <div className="card-body lh-lg">
                                            High blood pressure is when the force of blood pushing against your artery walls is consistently too high. This damages your arteries over time and can lead to serious complications like heart attack and stroke. “Hypertension” is another word for this common condition.
                                            <br />
                                            Healthcare providers call high blood pressure a “silent killer” because you usually don’t have any symptoms. So, you may not be aware that anything is wrong, but the damage is still occurring within your body.
                                            <br />
                                            Blood pressure is measured in millimeters of mercury (mm Hg). In general, hypertension is a blood pressure reading of 130/80 millimeters of mercury (mm Hg) or higher.
                                            <br />
                                            Every minute, three people die due to complications of high blood pressure.
                                            Yet, hypertension is silent, often going unnoticed until it’s too late.
                                            Here in Jamaica, hypertension affects approximately 25 percent of the population and it affects over 1.2 billion people worldwide.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="mb-0 mt-0">Issues</h3>
                                        </div>
                                        <div className="card-body lh-lg">
                                            <ul>
                                                <li>
                                                    There are multiple issues that lead to these overwhelming statistics. One such issue is that of awareness. Though hypertension affects such a large portion of the population, not many persons have even a basic understanding of the illness. Basic understanding being what is hypertension, factors affecting it and what are its effects.
                                                </li>
                                                <li>
                                                    Another issue is lack of knowledge on how to manage the ailment. Once diagnosed, many individuals get uninformed opinions from friends on how to manage the illness. A lot of these opinions are either incorrect or incomplete which leads to mismanagement of illness. Others may use Artificial Intelligence tools to get a better understanding of how to manage the disease. However, many tools only provide generalised tips and are not as helpful.

                                                </li>
                                                <li>
                                                    Lastly, the issue of identifying whether or not someone has hypertension. Many people do not take the time to get the recommended bi-annual general checkup. Therefore, hypertension is diagnosed a long period after the disease has already started to affect the individual.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="mb-0 mt-0">Hyper Plus as the solution</h3>
                                        </div>
                                        <div className="card-body lh-lg">
                                            A solution has been developed that addresses all these issues. Hyper Plus, provides a reliable, centralized hypertension companion tool that provides more detailed and specific information about hypertension. Instead of generic answers, Hyper Plus has been trained on health studies to provide more accurate and true information regarding the managing, prevention and overall awareness of hypertension. Known statistics can also be entered so get a prediction of whether someone is likely to have hypertension.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}