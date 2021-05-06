import React from "react";
import {
  Box,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  makeStyles,
  TableContainer,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";

const useStyles = makeStyles((theme) => ({
    root: {},
    action: {
      marginRight: theme.spacing(1),
    },
    table: {
      maxWidth: "200px",
      wordWrap: "break-word",
    },
    container: {
      maxHeight: "442px",
      scrollbarColor: "dark",
      scrollbarWidth: "thin",
      width: "100%",
    },
  }));

function Tables(data: any) {
    const classes = useStyles();
    return (
      <Box width="100%">
        <PerfectScrollbar>
          <TableContainer className={classes.container}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {data.header?.map((item: any, index: any) => {
                    const newIndex = index;
                    const headerAlign = data.align?.filter(
                      (item: any, index: any) => index === newIndex
                    );
                    return (
                      <TableCell align={headerAlign ? headerAlign[0] : "center"}>
                        {item}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              {data.header.length ? (
                <TableBody>
                  {data?.data.map((item: any, key: any) => {
                    return (
                      <TableRow hover key={key}>
                        {item?.map((prop: any, keys: any) => {
                          const newIndex = keys;
                          const cellAlign = data.align?.filter(
                            (item: any, index: any) => index === newIndex
                          );
                          return (
                            <TableCell
                              key={keys}
                              align={cellAlign ? cellAlign[0] : "center"}
                              className={classes.table}
                            >
                              {prop}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              ) : (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={data.header.length}>
                      No record could be listed
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </PerfectScrollbar>
      </Box>
    );
}

export default Tables

Tables.defaultProps = {
    fetcher: {
      loading: false,
    },
    data: [],
  };
