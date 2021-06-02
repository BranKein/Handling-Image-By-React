import React, { useState } from "react";
import axios from "axios";

const UploadSingleImage = () => {
    const [extension, setExtension] = useState("");
    const [imgBase64, setImgBase64] = useState("");

    const onChange = (e) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result;
            if (base64) {
                console.log(base64.toString())
                setExtension(base64.toString().split("/")[1].split(";")[0]);
                setImgBase64(base64.toString().split(",")[1]);
            }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const onClick = async (e) => {
        console.log(extension);
        console.log(imgBase64);

        await axios.post(
            "/one_img/upload",
            {
                base64_str: imgBase64,
                extension: extension,
            });
    }

    return (
        <div>
            <input type="file" onChange={onChange} alt=""/>
            <button onClick={onClick}>제출</button>
        </div>
    );
};

export default UploadSingleImage;