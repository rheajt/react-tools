import * as React from "react";
import { CourseSection } from "./types/CourseSection";
import { periods } from "./periods";
import { StudentSchedule } from "./types/StudentSchedule";
import { loadGrid } from "./grids";
import { SecondaryTimeToggle } from "./SecondaryTimeToggle";
import { SemesterToggle } from "./SemesterToggle";
import { PrimaryWeekToggle } from "./PrimaryWeekToggle";
import "./styles.css";

interface Props {
    school: "primary" | "secondary";
    selectedSections: (StudentSchedule | CourseSection)[];
    active: string;
    setActive: (course_id: string) => void;
}

let colors = ["ell", "ccv", "imm", "ims", "phe", "tok", "mus", "ias", "cmi"];

export function CourseGrid({
    school = "secondary",
    active = "",
    setActive = () => null,
    selectedSections,
}: Props) {
    const [schoolId, setSchoolId] = React.useState(1002);
    const [term, setTerm] = React.useState(3201);
    const [week, setWeek] = React.useState(1);

    const grid = loadGrid(school);

    const toggleTerm = (e: any) => {
        setActive("");
        setTerm(+e.target.value);
    };

    const toggleSchool = (e: any) => {
        setActive("");
        setSchoolId(+e.target.value);
    };

    const toggleWeek = (e: any) => {
        setActive("");
        setWeek(+e.target.value);
    };

    const updatedSections = selectedSections.reduce<{
        [key: string]: CourseSection | StudentSchedule;
    }>((acc, cur) => {
        if (cur.termid === 3200 || cur.termid === term) {
            cur.times.forEach((time) => {
                acc[time] = cur;
            });
        }

        return acc;
    }, {});

    const sections = selectedSections.reduce<string[]>((acc, cur) => {
        if (!acc.includes(cur.course_id)) {
            acc.push(cur.course_id);
        }
        return acc;
    }, []);

    return (
        <>
            <div className="toggles">
                {school === "secondary" ? (
                    <SecondaryTimeToggle
                        toggleSchool={toggleSchool}
                        schoolId={schoolId}
                    />
                ) : (
                    <PrimaryWeekToggle toggleWeek={toggleWeek} week={week} />
                )}
                <SemesterToggle toggleTerm={toggleTerm} term={term} />
            </div>

            <div
                className="course-grid"
                style={{
                    gridTemplateColumns: `40px repeat(${grid[0].length - 1
                        }, 1fr)`,
                }}
            >
                {grid.map((row, y) => {
                    return row.map((cell, x) => {
                        let period = +row[0];

                        if (week === 2) {
                            console.log(+period + 17);
                            period = period + 17;
                        }

                        if (typeof cell === "string") {
                            if (y > 0 && x === 0) {
                                return (
                                    <div
                                        key={`grid-${y}-${x}`}
                                        className="grid-header"
                                    >
                                        <p>Pd {cell}</p>
                                        {schoolId > 1001 && (
                                            <span>
                                                {periods[schoolId][cell].name}
                                            </span>
                                        )}
                                    </div>
                                );
                            }
                            return (
                                <div
                                    key={`grid-${y}-${x}`}
                                    className="grid-header"
                                >
                                    {cell}
                                </div>
                            );
                        }

                        const section = updatedSections[`${period}_${x}`];

                        if (!section) {
                            return <div className="grid-cell"></div>;
                        }

                        let semester =
                            +section.termid === 3200
                                ? "Year"
                                : +section.termid === 3201
                                    ? "S 1"
                                    : "S 2";

                        let colorIdx = sections.findIndex(
                            (s) => s === section.course_id
                        );

                        return (
                            <div
                                key={`cell-${y}-${x}`}
                                className={`grid-cell ${colors[colorIdx % colors.length]
                                    } ${section.course_id === active ? "active" : ""
                                    }`}
                                onClick={() => {
                                    if (!setActive) return;

                                    if (active === section.course_id) {
                                        setActive("");
                                    } else {
                                        setActive(section.course_id);
                                    }
                                }}
                            >
                                <p>
                                    {section.course_name}
                                    <br />
                                    {section.course_id}
                                </p>
                                <p>Room: {section.room}</p>

                                <span className="semester">{semester}</span>
                            </div>
                        );
                    });
                })}
            </div>
        </>
    );
}
