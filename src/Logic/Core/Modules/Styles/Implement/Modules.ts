import Domain from "./Domain/Styles.domain";
import Service from "./Service/Styles.service";
import Creators from "../../../Helpers/Creators/Creators";
import APIRequest from "Logic/Core/API/API";

const Modules = Creators.createModule("StyleModule", {
	domain: new Domain(),
	service: new Service(APIRequest),
});

export default Modules;
