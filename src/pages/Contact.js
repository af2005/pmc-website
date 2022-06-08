import React, {useEffect} from "react";

export const ContactUs = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '25769060',
                    formId: 'cee037cd-fc0a-48a0-9d55-501b566f06f9',
                    region: 'eu1',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div className="container m-auto px-6 py-10 md:px-12 lg:px-20">
            <div id="hubspotForm"/>
        </div>
    );

}

