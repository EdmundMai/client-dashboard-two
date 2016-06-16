import { AccountStat } from "./account-stat";

export interface FianceData {
  name: String,
  engagements_count: Number,
  engagements_forecast: Number,
  potential_imps_count: Number,
  potential_imps_forecast: Number,
  start_date: Date,
  riv: Number,
  accounts: AccountStat[]
}
