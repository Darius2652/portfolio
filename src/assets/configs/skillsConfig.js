import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skills-icons",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skills-icons",
            icon: <SiPostgresql size={50}/>,
            text: "Postgres"
        },
        {
            id: "skills-2",
            className: "skills-icons",
            icon: <SiMicrosoftsqlserver size={50}/>,
            text: "MSSQL"
        },
        {
            id: "skills-3",
            className: "skills-icons",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-4",
            className: "skills-icons",
            icon: <SiMicrosoftazure size={50}/>,
            text: "Azure"
        },
        {
            id: "skills-5",
            className: "skills-icons",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "sec-skills-icons",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-6",
            className: "sec-skills-icons",
            icon: <SiRedis size={50}/>,
            text: "Redis"
        },
        {
            id: "skills-7",
            className: "sec-skills-icons",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-8",
            className: "sec-skills-icons",
            icon: <SiSnowflake size={50}/>,
            text: "Snowflake"
        },
        {
            id: "skills-9",
            className: "sec-skills-icons",
            icon: <SiApacheairflow size={50}/>,
            text: "Airflow"
        },
        {
            id: "skills-10",
            className: "sec-skills-icons",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-11",
            className: "sec-skills-icons",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "sec-skills-icons",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-13",
            className: "sec-skills-icons",
            icon: <SiReact size={50}/>,
            text: "React"
        }
        ,
        {
            id: "skills-14",
            className: "sec-skills-icons",
            icon: <SiApachekafka size={50}/>,
            text: "Kafka"
        }
        ,
        {
            id: "skills-15",
            className: "sec-skills-icons",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        }
    ]
}

export default skillsConfig
