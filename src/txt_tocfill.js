
const compute = (rows, { min_total_width = false, width_pad = 3, left_pad = ' ', fill = '.', right_pad = ' ' } = {}) => {

    const interior = Math.max(... rows.map(r => r.length));

    return interior;

};




export { compute };
