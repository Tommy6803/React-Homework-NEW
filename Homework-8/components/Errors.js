import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';

export const Errors = ({ reload }) => (
    <Alert severity={"error"}>
        Everything is broken!
        <Button onClick={reload}>Reload</Button>
    </Alert>
);