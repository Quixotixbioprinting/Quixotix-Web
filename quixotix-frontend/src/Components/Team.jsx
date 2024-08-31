import React from "react";
import {team} from "../data";

function Team() {
    return (
        <div>
        <div className="team-header">
        <h2>OUR MEDICAL TEAM</h2>
        </div>
        <div className="carousel carousel-end space-x-4 w-[100%]">
        {team.map ((item, index)=> (
        <div className="carousel-item flex flex-col items-center">
        <img
        src={item.img} />
        <h2 className="text-center mt-3 member-name">{item.title}</h2>
        <p className="text-center max-w-md member-desc">{item.desc}</p>
        <div className="design-line">
        </div>
        </div>
        ))}
        </div>
        </div>
        )}

export default Team;

