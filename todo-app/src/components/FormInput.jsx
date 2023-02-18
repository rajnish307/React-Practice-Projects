import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  FormHelperText,
  FormControl,
} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, gray 30%, black 90%)",
    border: 0,
    color: "white",
    height: 30,
    whiteSpace: "nowrap",
    margin: "15px 0 0 20px",
  },
  label: {
    width: "80%",
  },
});

const TodoCreator = ({
  theme,
  todo,
  setTodo,
  clearInput,
  inputRef,
  isInputEmpty,
  preventSubmit,
}) => {
  const classes = useStyles();

  return (
    <div className="form__input">
      <ThemeProvider theme={theme}>
        <FormControl className={classes.label}>
          <TextField
            id="outlined-basic"
            label="What's need to be done?"
            value={todo}
            variant="outlined"
            onChange={(e) => setTodo(e.target.value)}
            onFocus={clearInput}
            ref={inputRef}
            aria-describedby="component-error-text"
            onKeyPress={preventSubmit}
          />

          {!isInputEmpty ? (
            <></>
          ) : (
            <>
              <FormHelperText id="component-error-text">
                Task can't be empty
              </FormHelperText>
            </>
          )}
        </FormControl>
        <Button
          type="submit"
          alt="add-note"
          className={classes.root}
          onKeyPress={preventSubmit}
        >
          Add task
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default TodoCreator;
