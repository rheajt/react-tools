import * as React from "react";
interface Props {
    toggleSchool: (e: any) => void;
    schoolId: number;
}

export function SecondaryTimeToggle({ schoolId, toggleSchool }: Props) {
    return (
        <div>
            <div>
                <label htmlFor="school-ms">Middle School Times</label>
                <input
                    id="school-ms"
                    name="school"
                    type="radio"
                    value="1002"
                    onClick={toggleSchool}
                    checked={schoolId === 1002}
                />
            </div>
            <div>
                <label htmlFor="school-hs">High School Times</label>
                <input
                    id="school-hs"
                    name="school"
                    type="radio"
                    value="1003"
                    onClick={toggleSchool}
                    checked={schoolId === 1003}
                />
            </div>
        </div>
    );
}
