import IBaseBusiness from '../app/business/BaseBusiness';
import IReadController from './interfaces/ReadController';
import IWriteController from './interfaces/WriteController';

interface IBaseController<T extends IBaseBusiness<object>> extends IReadController, IWriteController {
  type?: T;
}

export default IBaseController;
