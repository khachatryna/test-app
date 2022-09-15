import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectCoursesList} from "../../features/courses/coursesSlice";
import PlayIcon from "../../assets/resources/playIcon";

function Courses() {
    const [coursesStateus, setCoursesStatus] = useState(1)
    const coursList = useSelector(selectCoursesList);
    
    return (<div className="courses">
        <div className="coursesStatusBar">
            <ul className="coursesStatusBar-list">
                <li className={`coursesStatusBar-list-item ${coursesStateus === 1 ? "active" : ""}`} onClick={() => setCoursesStatus(1)}>Popular</li>
                <li className={`coursesStatusBar-list-item ${coursesStateus === 2 ? "active" : ""}`} onClick={() => setCoursesStatus(2)}>Favorite</li>
                <li className={`coursesStatusBar-list-item ${coursesStateus === 3 ? "active" : ""}`} onClick={() => setCoursesStatus(3)}>New</li>
            </ul>
        </div>
        <div className="courseList">
            {
                coursList.filter(item => item.status === coursesStateus).map(coursre => (
                    <div style={{backgroundImage: `url(${coursre.image})`}} key={coursre.id} className="courseList-item">
                        <div className="info">
                            <div className="info-left">
                                <div className="title">{coursre.title}</div>
                                <div className="description">{coursre.lessonsCount} lessons</div>
                            </div>
                            <div className="info-right">
                                <div className="title">{coursre.tiem}</div>
                            </div>
                        </div>
                        <div className="icon">
                            <PlayIcon />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>)
}

export default Courses