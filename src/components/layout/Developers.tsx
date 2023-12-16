import React from "react";
import data from "../../../data/developers.json";
import {Image} from "@nextui-org/image";

const Developers = () => {
        return (
            <div className="grid grid-cols-3 gap-4" style={{margin: 220, marginTop: 100, marginBottom: 100}}>
                {
                    data.map((data, i) => (
                        <div className="card w-96 glass" key={i}>
                            <figure><Image src={data.image} alt={data.name} style={{height: 512}} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

export default Developers;