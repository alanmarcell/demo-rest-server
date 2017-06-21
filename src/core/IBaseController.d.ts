import IBaseBusiness from './IBaseBusiness';
import IReadController from './IReadController';
import IWriteController from './IWriteController';

interface IBaseController<T extends IBaseBusiness<object>> extends IReadController, IWriteController {
  type?: T;
}

export default IBaseController;
