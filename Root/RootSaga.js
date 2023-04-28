import { all } from "redux-saga/effects";
import dataSagas from "../Data/DataSagas";

export default function* rootSaga() {
  yield all([dataSagas()]);
}
