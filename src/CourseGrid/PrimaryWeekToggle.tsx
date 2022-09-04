import * as React from "react";

interface Props {
    toggleWeek: (e: any) => void;
    week: number;
}

export function PrimaryWeekToggle({ toggleWeek, week }: Props) {
    return (
        <div>
            <div>
                <label htmlFor="w1">Week 1</label>
                <input
                    id="w1"
                    name="week"
                    type="radio"
                    value="1"
                    onClick={toggleWeek}
                    checked={week === 1}
                />
            </div>
            <div>
                <label htmlFor="w2">Week 2</label>
                <input
                    id="w2"
                    name="week"
                    type="radio"
                    value="2"
                    onClick={toggleWeek}
                    checked={week === 2}
                />
            </div>
        </div>
    );
}
