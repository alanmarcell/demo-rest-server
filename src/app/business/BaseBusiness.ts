import Read from './common/Read';
import Write from './common/Write';

interface IBaseBusiness<T> extends Read<T>, Write<T> { }

export default IBaseBusiness;
