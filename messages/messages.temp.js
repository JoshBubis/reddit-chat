function messages() {

    retur Messages.find({}, {sort: {'time': -1} });
}

function time(time) {
  return moment(time).format("HH:mm:ss");
}
