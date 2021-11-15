import React from 'react'

function ProjectsCard({ key, catergory, image, Title, Description }) {
    return (
        <>
            <div className="projects_card bg_white dark:bg-gray-800 box-border p-9 rounded-xl shadow-xl" key={key}>
                <img src={image} alt="Project" />
                <div className="pt-6">
                    <span className="bg-purple-100 px-2 py-1 mt-2 rounded-full text-sm">{catergory}</span>
                    <div className="">
                        <h1 className=" dark:text-gray-100 text-2xl pt-4">{Title}</h1>
                        <p className="dark:text-gray-100 text-md">{Description}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectsCard
