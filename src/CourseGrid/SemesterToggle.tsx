import * as React from "react";

interface Props {
    toggleTerm: (e: any) => void;
    term: number;
}

export function SemesterToggle({ toggleTerm, term }: Props) {
    return (
        <div>
            <div>
                <label htmlFor="s1">Semester 1</label>
                <input
                    id="s1"
                    name="semester"
                    type="radio"
                    value="3201"
                    onClick={toggleTerm}
                    checked={term === 3201}
                />
            </div>
            <div>
                <label htmlFor="s2">Semester 2</label>
                <input
                    id="s2"
                    name="semester"
                    type="radio"
                    value="3202"
                    onClick={toggleTerm}
                    checked={term === 3202}
                />
            </div>
        </div>
    );
}
