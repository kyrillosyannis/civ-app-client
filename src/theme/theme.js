import upperFirst from 'lodash/upperFirst';
import muiTheme from './muiTheme';

// Vertical padding (or margin equal to padding)
const yAxis = {
  xl: 90,
  lg: '5.2vw',
  sm: '10vw',
  xs: '12.5vw',
};

// Horizontal padding (or margin equal to padding)
const xAxis = {
  xl: 240,
  lg: '7.1%',
  sm: '5.3%',
  xs: '4.6%',
};

const operatorCalc = (operator, axis, value, size) =>
  operator ? `calc(${axis[size]} ${operator} ${value})` : axis[size];

const createMarginOrPadding = (type, direction, operator = '', value = '') => {
  const name = `${type}${upperFirst(direction)}`;
  const isVertical = direction === 'top' || direction === 'bottom';
  const vertical = {
    xl: operatorCalc(operator, yAxis, value, 'xl'),
    lg: operatorCalc(operator, yAxis, value, 'lg'),
    sm: operatorCalc(operator, yAxis, value, 'sm'),
    xs: operatorCalc(operator, yAxis, value, 'xs'),
  };
  const horizontal = {
    xl: operatorCalc(operator, xAxis, value, 'xl'),
    lg: operatorCalc(operator, xAxis, value, 'lg'),
    sm: operatorCalc(operator, xAxis, value, 'sm'),
    xs: operatorCalc(operator, xAxis, value, 'xs'),
  };

  const dir = isVertical ? vertical : horizontal;
  const { up } = muiTheme.breakpoints;
  return {
    [name]: dir.xs,
    [up('sm')]: {
      [name]: dir.sm,
    },
    [up('lg')]: {
      [name]: dir.lg,
    },
    [up('xl')]: {
      [name]: dir.xl,
    },
  };
};

const getMarginOrPadding = (type, args, operator = '', value = '') => {
  const xlMediaQuery = muiTheme.breakpoints.up('xl');
  const lgMediaQuery = muiTheme.breakpoints.up('lg');
  const smMediaQuery = muiTheme.breakpoints.up('sm');

  const margins = args.reduce(
    (margins, direction) => ({
      ...margins,
      [direction]: createMarginOrPadding(type, direction, operator, value),
    }),
    {}
  );

  const typeMargins = Object.entries(margins).reduce(
    (sum, [name, value]) => ({
      ...sum,
      [`${type}${upperFirst(name)}`]: value[`${type}${upperFirst(name)}`],
    }),
    {}
  );

  return {
    ...typeMargins,
    [smMediaQuery]: Object.values(margins).reduce(
      (sum, margin) => ({ ...sum, ...margin[smMediaQuery] }),
      {}
    ),
    [lgMediaQuery]: Object.values(margins).reduce(
      (sum, margin) => ({ ...sum, ...margin[lgMediaQuery] }),
      {}
    ),
    [xlMediaQuery]: Object.values(margins).reduce(
      (sum, margin) => ({ ...sum, ...margin[xlMediaQuery] }),
      {}
    ),
  };
};

const theme = {
  ...muiTheme,
  app: {
    appBarHeight: 60,
    appBarHeight_lg: 70,
    menuTabHeight: 30,
    maxWidth: 1920,
    minWidth: 550,
    xAxis,
    yAxis,
  },
  content: {
    padding(...args) {
      const params = args.length ? args : ['top', 'bottom', 'left', 'right'];

      return getMarginOrPadding('padding', params);
    },

    margin(...args) {
      const params = args.length ? args : ['top', 'bottom', 'left', 'right'];

      return getMarginOrPadding('margin', params);
    },

    calc: (type, direction, operator, value) => {
      const params = direction instanceof Array ? direction : [direction];

      return getMarginOrPadding(type, params, operator, value);
    },
  },
};

if (process.env.NODE_ENV === 'development') {
  // Do not replace with log(), it affects test coverage
  /* eslint-disable no-console */
  console.log('--- THEME ---', theme);
}

export default theme;
