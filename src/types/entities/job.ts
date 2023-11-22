export type ptJobSkills = {
    id: number,
    name: string
}
export type job = {
    id: number,
    title: string,
    createdBy: string,
    createdDate: string,
    lastModifiedBy: string,
    lastModifiedDate: string,
    seq: number,
    isActive: boolean,
    description: {
        id: number,
        txt: string
    },
    ptJobSkills: ptJobSkills[],
    ptJobApplies: null | number
}

export type jobItem = Pick<job, 'id' | 'title'>
