exports.handler = async (event, context) => {
    try {
        const body = JSON.parse(event.body);
        const name = body.name;

        console.log(`มีคนส่งชื่อมา: ${name}`);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `สวัสดี ${name} ข้อมูลของคุณถูกบันทึกแล้ว!`
            })
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "เกิดข้อผิดพลาด" })
        };
    }
};
