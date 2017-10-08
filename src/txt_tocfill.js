
const maxlen = (rows) => rows.length? Math.max(... rows.map(r => r.length)) : 0;





const compute = ({
    rows,
    rightrows = [],
//  min_total_width = false,
    width_pad = 3,
    left_pad  = ' ',
    fill      = '.',
    right_pad = ' '
} = {}) => {

    const interior = maxlen(rows),
          wppi     = width_pad + interior,
          i_fill_b = fill.repeat(wppi);

    return rows.map( (r,i) => `${r}${left_pad}${i_fill_b.substring(i_fill_b.length - (wppi - r.length), wppi)}${right_pad}${rightrows[i] === undefined? '' : rightrows[i]}`);

};





module.exports = { maxlen, compute };
