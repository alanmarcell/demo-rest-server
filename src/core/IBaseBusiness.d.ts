import IReadBusiness from './IReadBusiness';
import IWriteBusiness from './IWriteBusiness';

interface IBaseBusiness<T> extends IReadBusiness<T>, IWriteBusiness<T> { }

export default IBaseBusiness;
