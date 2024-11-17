

const eventsController = {
    getHola: (req, res,next) => {
        res.json({
            response: "holaa",
            success: true,
            error: null
        })
    }
}

export default eventsController;