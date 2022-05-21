import axiosClient from 'config/axios'

export default async function handler(req, res) {
    const { q } = req.query

    if (q) {
        const { data } = await axiosClient.get(
            `/articles?filters[title][$containsi]=${q}&pagination[pageSize]=6&populate=*`
        )
        res.status(200).json(data)
    }
}
